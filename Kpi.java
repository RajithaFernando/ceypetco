package com.example.vue.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.transaction.Transactional;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Transactional
@org.springframework.transaction.annotation.Transactional
@Entity
@Table(name = "kpi")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Kpi {
    @Id
    @Column(length = 255)
  
    private String name;

    private String kpistring;
}
