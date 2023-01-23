## Database
[[2023-01-19 - db_university]]

## Query
### Group By
1. Contare i corsi raggruppati per cfu
```sql
SELECT cfu, COUNT(*)
FROM courses
GROUP BY cfu;
```

2. Contare gli studenti raggruppati per anno di nascita
```sql
SELECT YEAR(date_of_birth), COUNT(*)
FROM students
GROUP BY YEAR(date_of_birth);
```

3. Selezionare il voto più basso dato ad ogni appello d'esame
```sql
SELECT exam_id, MIN(vote)
FROM exam_student
GROUP BY exam_id;
```

4. Contare gli appelli d'esame del mese di luglio raggruppati per giorno
```sql
SELECT DAY(date), COUNT(*)
FROM exams
WHERE MONTH(date) = 7
GROUP BY DAY(date);
```


### Join
1. Selezionare tutti i corsi del Corso di Laurea in Informatica (22)
```sql
SELECT degrees.name, courses.*
FROM degrees
    JOIN courses
        ON degrees.id = courses.degree_id
WHERE degrees.name LIKE 'Corso di Laurea in Informatica';
```

2. Selezionare le informazioni sul corso con id = 144, con tutti i relativi appelli d’esame
```sql
SELECT courses.name, exams.*
FROM courses
    JOIN exams
        ON courses.id = exams.course_id
WHERE courses.id = 144;
```

3. Selezionare il nome del departimento a cui appartiene il corso di laurea con nome *Corso di Laurea in Diritto dell'Economia*
```sql
SELECT departments.name
FROM degrees
    JOIN departments
        ON degrees.department_id = departments.id
WHERE degrees.name LIKE "%Diritto dell'Economia%";
```

4. Selezionare tutti gli appelli d'esame del *Corso di Laurea Magistrale in Fisica* del primo anno
```sql
SELECT exams.*
FROM degrees
    JOIN courses
        ON degrees.id = courses.degree_id
    JOIN exams
        ON courses.id = exams.course_id
WHERE degrees.name LIKE "Corso di Laurea Magistrale in Fisica"
    AND year = 1;
```

5. Selezionare tutti i docenti che insegnano nel Corso di Laurea in Lettere (22)
```sql
SELECT teachers.*
FROM degrees
    JOIN courses
        ON degrees.id = courses.degree_id
    JOIN course_teacher
        ON courses.id = course_teacher.course_id
    JOIN teachers
        ON course_teacher.teacher_id = teachers.id
WHERE degrees.name LIKE "Corso di Laurea in Lettere";
```

6. Selezionare tutti gli esami di Mirco Messina (matricola n. 620320)
```sql
SELECT exams.*, exam_student.vote
FROM students
    JOIN exam_student
        ON students.id = exam_student.student_id
    JOIN exams
        ON exam_student.exam_id = exams.id
WHERE students.name LIKE "Mirco"
    AND students.surname LIKE "Messina";

# pro version
SELECT courses.name, exams.date, exam_student.vote
FROM students
    JOIN exam_student
        ON students.id = exam_student.student_id
    JOIN exams
        ON exam_student.exam_id = exams.id
    JOIN courses
        ON exams.course_id = courses.id
WHERE students.name LIKE "Mirco"
    AND students.surname LIKE "Messina";
```

7. Selezionare il voto medio di superamento d'esame per ogni corso, con anche i dati del corso di laurea associato, ordinati per media voto decrescente
```sql
SELECT degrees.name, courses.name, AVG(exam_student.vote) AS 'voto_medio_sup'
FROM courses
    JOIN exams  
        ON courses.id = exams.course_id
    JOIN exam_student
        ON exams.id = exam_student.exam_id
    JOIN degrees
        ON courses.degree_id = degrees.id
WHERE exam_student.vote >= 18
GROUP BY courses.id
ORDER BY voto_medio_sup DESC;
```
