package com.example.bigtest;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Task_Repository extends JpaRepository<Task,Integer> {
}
