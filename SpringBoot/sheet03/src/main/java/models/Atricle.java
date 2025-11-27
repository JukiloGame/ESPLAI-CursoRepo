package models;

import jakarta.persistence.*;

@Entity
// @Table(unituqueConstraints = @UniqueConstaint(name = "UK_Article_reference", columnNames = "reference"))
@Table (name = "Articles")
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
