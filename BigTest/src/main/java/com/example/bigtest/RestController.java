package com.example.bigtest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("/api")
public class RestController {

    private final Service service;

    public RestController(Service service) {
        this.service = service;
    }

    @GetMapping(value = "/user", produces = {"application/json", "application/xml"})
    public ResponseEntity<?> getUser() {
        return ResponseEntity.ok().body(service.findAllUser());
    }

    @GetMapping(value = "/tasks", produces = {"application/json", "application/xml"})
    public ResponseEntity<?> getTasks() {
        return ResponseEntity.ok().body(service.findAllTask());
    }

    @PostMapping(value = "/users", consumes = {"application/json", "application/xml"})
    public ResponseEntity createUser(@RequestBody User user) {
        service.createUser(user);
        return ResponseEntity.ok().build();
    }

    @PostMapping(value = "/tasks", consumes = {"application/json", "application/xml"})
    public ResponseEntity createTask(@RequestBody Task task) {
        service.createTask(task);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping(value = "/users")
    public ResponseEntity deleteUser(@RequestParam int id_user) {
        service.deleteUser(id_user);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping(value = "/tasks")
    public ResponseEntity deleteTask(@RequestParam int id_task) {
        service.deleteTask(id_task);
        return ResponseEntity.ok().build();
    }
}
