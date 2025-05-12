package com.taskmanager.task_manager.services;

import org.springframework.stereotype.Service;
import com.taskmanager.task_manager.repository.TaskRepository;
import com.taskmanager.task_manager.controllers.exceptions.*;
import com.taskmanager.task_manager.entities.Task;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository repository;

    // Constructor injection
    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    // Getter for repository (optional)
    public TaskRepository getRepository() {
        return repository;
    }

    // Getter for all tasks
    public List<Task> getAll() {
        return repository.findAll();
    }

    // Getter for task by id
    public Task getById(Long id) {
        return repository.findById(id).orElseThrow(() -> new TaskNotFoundException(id));
    }

    // Method to create a new task
    public Task create(Task task) {
        return repository.save(task);
    }

    // Method to update an existing task
    public Task update(Long id, Task task) {
        Task existing = getById(id);
        existing.setHeadline(task.getHeadline());
        existing.setDescription(task.getDescription());
        existing.setDeadline(task.getDeadline());
        existing.setStatus(task.getStatus());
        existing.setTags(task.getTags());
        return repository.save(existing);
    }

    // Method to delete a task
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
