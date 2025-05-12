package com.taskmanager.task_manager.controllers;

import org.springframework.web.bind.annotation.*;
import com.taskmanager.task_manager.services.*;
import com.taskmanager.task_manager.entities.*;
import java.util.List;

@RestController
@RequestMapping("/tasks")
class TaskController {

    private final TaskService service;

    TaskController(TaskService service) {
        this.service = service;
    }

    @GetMapping
    List<Task> getAllTasks() {
        return service.getAll();
    }

    @PostMapping
    Task createTask(@RequestBody Task task) {
        return service.create(task);
    }

    @GetMapping("/{id}")
    Task getTask(@PathVariable Long id) {
        return service.getById(id);
    }

    @PutMapping("/{id}")
    Task updateTask(@PathVariable Long id, @RequestBody Task task) {
        return service.update(id, task);
    }

    @DeleteMapping("/{id}")
    void deleteTask(@PathVariable Long id) {
        service.delete(id);
    }
}
