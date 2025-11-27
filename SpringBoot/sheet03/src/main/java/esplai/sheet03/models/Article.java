package esplai.sheet03.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
// @Table(unituqueConstraints = @UniqueConstaint(name = "UK_Article_reference", columnNames = "reference"))
@Table (name = "Articles")
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(nullable = false, length = 150)
    private String title;
    private double priceByUnit;
    @Column(unique = true)
    private String reference;
}
