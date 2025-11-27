package models;

import jakarta.persistence.*;

@Entity
public class Atricle {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(nullable = false, length = 150)
    private String title;
    private double priceByUnit;
    @Column(unique = true)
    private String reference;
}
