import {pool} from '../../db.js'
import {Query} from './queries.js'

export const addJob = (request,response) => {
    const {title,type,description,location,salary,company_id} = request.body;

    pool.query(Query.addJob, [title,type,description,location,salary,company_id], (error,results) => {
        if(error)throw error;
        return response.status(201).send('The Job Posting was added Successfully!')
    })
}

export const getJobs = (request,response) => {
    const limit = parseInt(request.query._limit) || 50;
    pool.query(Query.getJobs, (error,results) => {
        if(error) throw error;
        response.status(200).json(results.rows.slice(0, limit))
    })
}

export const deleteJob = (request,response) => {
    const id = parseInt(request.params.id);
    //console.log(id);
    pool.query(Query.deleteJob, [id], (error,results) => {
        if(error) throw error;
        return response.status(200).send(`Successfully Deleted Job Posting with the id of ${id}`)
    })
}

export const getJob = (request,response) => {
    const id = parseInt(request.params.id);
    pool.query(Query.getJob, [id], (error,results) => {
        if(error) throw error;
        return response.status(200).json(results.rows)
    })
}

export const updateJob = (request,response) => {
    const id = parseInt(request.params.id);
    const {company_id} = request.body;
    pool.query(Query.updateJob, [company_id, id], (error,results) =>{
        if (error) throw error;
        return response.status(200).send(`The job with the id: ${id} was Updated Successfully`)
    })
}

export const addCompany = (request,response) => {
    const {name,companydescription,contactemail,contactphone} = request.body;

    pool.query(Query.addCompany, [name, companydescription, contactemail, contactphone], (error,results) => {
        if(error)throw error;
        return response.status(201).json(results.rows[0].id)
    })
}

export const getCompanies = (request,response) => {
    const limit = parseInt(request.query._limit) || 50;
    pool.query(Query.getCompanies, (error,results) => {
        if(error) throw error;
        response.status(200).json(results.rows.slice(0, limit))
    })
}

export const deleteCompany = (request,response) => {
    const id = parseInt(request.params.id);
    //console.log(id);
    pool.query(Query.deleteCompany, [id], (error,results) => {
        if(error) throw error;
        return response.status(200).send(`Successfully Deleted Company with the id: ${id}`)
    })
}

export const getCompany = (request,response) => {
    const id = parseInt(request.params.id);
    pool.query(Query.getCompany, [id], (error,results) => {
        if(error) throw error;
        
        return response.status(200).json(results.rows)
    })
}

export const updateCompany = (request,response) => {
    const id =parseInt(request.params.id);
    const {name} = request.body
    pool.query(Query.updateCompany, [id, name], (error,results)=>{
        if(error) throw error;
        return response.status(200).send(`The Company with the id: ${id} Updated it's name Successfully`)
    })

}

export const updateJobandCompany = (request,response) => {
    const { updatedJob: job, updatedCompany: company } = request.body
    const {id, title, type, description, location,salary} = job
    const {name, companydescription, contactemail, contactphone} = company
    console.log(company)
    pool.query(Query.updateJob, [title,type,description, location, salary, id], (error,results) => {
        if(error) throw error;

        pool.query(Query.updateCompany, [name, companydescription, contactemail, contactphone, id], (error,results) => {
            if(error) throw error;
        })
        response.status(201).send(`The Job with id: ${id} was Updated Successfully`)
    })
    
}

export const initTables = async () => {
    try{
        await pool.query(Query.initializeCompany)
        await pool.query(Query.initializeJobs)
    }
    catch(error){
        if(error) throw error
    }
    console.log('Company was initialized Successfully')
    console.log('Jobs was initialized Successfully')
}