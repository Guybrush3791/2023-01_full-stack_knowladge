## Database
[[2023-01-19 - db_university]]

## Query
1. Selezionare tutti gli insegnanti
```sql
SELECT *
FROM teachers;
```

2. Selezionare tutti i referenti per ogni dipartimento
```sql
SELECT head_of_department
FROM departments;
```

3. Selezionare tutti gli studenti il cui nome inizia per "E" (373)
```sql
SELECT *
FROM students
WHERE name LIKE 'e%';
```

4. Selezionare tutti gli studenti che si sono iscritti nel 2020 (1645)
```sql
# opzione 1
SELECT *
FROM students
WHERE enrolment_date >= '2020-01-01'
    AND enrolment_date < '2021-01-01';

# opzione 2
SELECT *
FROM students
WHERE enrolment_date 
	BETWEEN '2020-01-01' AND '2021-01-01';

# opzione 3
SELECT *
FROM students
WHERE YEAR(enrolment_date) = 2020;
```

5. Selezionare tutti i corsi che non hanno un sito web (676)
```sql
SELECT *
FROM courses
WHERE website IS NULL;
```

6. Selezionare tutti gli insegnanti che hanno un numero di telefono (50)
```sql
SELECT *
FROM teachers
WHERE phone IS NOT NULL;
```

7. Selezionare tutti gli appelli d'esame dei mesi di giugno e luglio 2020 (2634)
```sql
# opzione 1
SELECT *
FROM exams
WHERE date >= '2020-06-01' 
	AND date < '2020-08-01';

# opzione 2
SELECT *
FROM exams
WHERE date 
    BETWEEN '2020-06-01' AND '2020-08-01';
```

8. Qual è il numero totale degli studenti iscritti? (5000)
```sql
SELECT COUNT(*)
FROM students;
```