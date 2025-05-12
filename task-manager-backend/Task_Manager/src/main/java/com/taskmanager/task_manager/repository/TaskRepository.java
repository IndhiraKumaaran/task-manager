package com.taskmanager.task_manager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.taskmanager.task_manager.entities.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
}

