package uz.botany.api.model;

import java.util.List;

public record Laboratory(
    String id,
    String name,
    String head,
    int staffCount,
    String description,
    List<String> directions
) {}
