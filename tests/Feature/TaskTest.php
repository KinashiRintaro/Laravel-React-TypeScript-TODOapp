<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Task;

class TaskTest extends TestCase
{
    use RefreshDatabase;
    /**
     * @test
     * 上記の通りアノテーションを記述すると
     * 関数名にtest_とつける必要がなくなる
     */
    public function タスク一覧を取得(): void
    {
        $tasks = Task::factory()->count(10)->create();
        $response = $this->getJson('api/tasks');

        $response
            ->assertOk()
            ->assertJsonCount($tasks->count());
    }

    /**
     * @test
     */
    public function タスクを登録することができる(): void
    {
        $data = [
            'title' => 'テスト投稿'
        ];
        $response = $this->postJson('api/tasks', $data);

        $response
            ->assertCreated()
            ->assertJsonFragment($data);
    }

    /**
     * @test
     */
    public function タイトルが空の場合は登録不可(): void
    {
        $data = [
            'title' => ''
        ];
        $response = $this->postJson('api/tasks', $data);

        $response
            ->assertStatus(422)
            ->assertJsonValidationErrors(
                ['title' => 'タイトルは必ず指定してください。']
            );
    }

    /**
     * @test
     */
    public function 登録時の最大桁数テスト(): void
    {
        $data = [
            'title' => str_repeat('あ', 256)
        ];
        $response = $this->postJson('api/tasks', $data);

        $response
            ->assertStatus(422)
            ->assertJsonValidationErrors(
                ['title' => 'タイトルは、255文字以下で指定してください。']
            );
    }
    
    /**
     * @test
     */
    public function タスクを更新することができる(): void
    {
        $task = Task::factory()->create();
        $task->title = '書き換え';

        $response = $this->patchJson("api/tasks/{$task->id}", $task->toArray());
        $response
            ->assertOk()
            ->assertJsonFragment($task->toArray());
    }

    /**
     * @test
     */
    public function タスクを削除することができる(): void
    {
        $task = Task::factory()->count(10)->create();
        $task->title = '書き換え';

        $response = $this->deleteJson("api/tasks/1");
        $response->assertOk();
        $response = $this->getJson("api/tasks");
        $response->assertJsonCount($task->count() - 1);
    }
}
