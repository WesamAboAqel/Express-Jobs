export const Query = {
    addJob: "INSERT INTO jobs (title,type,description,location,salary,company_id) VALUES ($1,$2,$3,$4,$5,$6)",
    getJobs: "SELECT * FROM jobs",
    deleteJob: "DELETE FROM jobs WHERE id = $1",
    getJob: "SELECT * FROM jobs WHERE jobs.id = $1",
    updateJob: `UPDATE jobs 
                SET title = $1, type = $2, description = $3, location = $4, salary = $5 
                WHERE id = $6`,
    addCompany: "INSERT INTO company (name,companydescription,contactemail,contactphone) VALUES ($1,$2,$3,$4) RETURNING id",
    getCompanies: "SELECT * FROM company",
    deleteCompany: "DELETE FROM company WHERE id = $1",
    getCompany: "SELECT * FROM company WHERE company.id = $1",
    updateCompany: `UPDATE  company
                    SET name = $1, companydescription = $2, contactemail = $3, contactphone = $4
                    WHERE id = (SELECT company_id FROM jobs WHERE id = $5)`,
    initializeJobs:`CREATE TABLE IF NOT EXISTS jobs (
                    id SERIAL PRIMARY KEY,
                    title VARCHAR(255),
                    type VARCHAR(255),
                    description TEST,
                    location VARCHAR(255),
                    salary VARCHAR(255),
                    company_id INT,
                    FOREIGN KEY (company_id) REFERENCES company(id)
                    );`,
    initializeCompany:`CREATE TABLE IF NOT EXISTS company(
                      id SERIAL PRIMARY KEY,
                      name VARCHAR(255),
                      companydescription TEXT,
                      contactemail VARCHAR(255),
                      contactphone VARCHAR(255)
                      );`
    
}