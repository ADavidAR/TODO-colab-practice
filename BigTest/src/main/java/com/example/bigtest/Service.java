package com.example.bigtest;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service

public class Service {
    private final User_Repository user_repository;
    private final Task_Repository task_repository;

    public Service(User_Repository userRepository, Task_Repository taskRepository) {
        user_repository = userRepository;
        task_repository = taskRepository;
    }

    public List<User> findAllUser(){
        return user_repository.findAll();
    }

    public List<Task> findAllTask() {
        return task_repository.findAll();
    }

    @Transactional
    public void createUser(User user){
        user_repository.save(user);
    }

    @Transactional
    public void createTask(Task task){
        task_repository.save(task);
    }

    @Transactional
    public void deleteTask(int id_task){
        Task task = task_repository.findById(id_task).orElseThrow(() -> new RuntimeException());;
        task_repository.delete(task);
    }

    @Transactional
    public void deleteUser(int id_user){
        User user = user_repository.findById(id_user).orElseThrow(() -> new RuntimeException());
        user_repository.delete(user);
    }

}
