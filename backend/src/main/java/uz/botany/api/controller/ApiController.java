package uz.botany.api.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uz.botany.api.model.Laboratory;
import uz.botany.api.model.NewsItem;
import uz.botany.api.model.StatItem;
import uz.botany.api.service.BotanyService;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:4201"})
public class ApiController {

    private final BotanyService botanyService;

    public ApiController(BotanyService botanyService) {
        this.botanyService = botanyService;
    }

    @GetMapping("/news")
    public List<NewsItem> getNews() {
        return botanyService.getNews();
    }

    @GetMapping("/stats")
    public List<StatItem> getStats() {
        return botanyService.getStats();
    }

    @GetMapping("/laboratories")
    public List<Laboratory> getLaboratories() {
        return botanyService.getLaboratories();
    }

    @GetMapping("/laboratories/{id}")
    public ResponseEntity<Laboratory> getLaboratory(@PathVariable String id) {
        return botanyService.getLaboratoryById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/health")
    public String health() {
        return "OK - Botany Institute API is running";
    }
}
