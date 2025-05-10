import Router from 'express'
import { addJob, deleteJob, getJob, getJobs , updateJob, addCompany, deleteCompany, getCompany, getCompanies,updateCompany, updateJobandCompany} from './controller.js';

const router = Router();

router.get('/getJobs', getJobs)

router.get('/getJob/:id', getJob)

router.post('/addJob',addJob)

router.delete('/deleteJob/:id', deleteJob)

router.put('/updateJob/:id', updateJob)

router.get('/getCompanies', getCompanies)

router.get('/getCompany/:id', getCompany)

router.post('/addCompany',addCompany)

router.delete('/deleteCompany/:id', deleteCompany)

router.put('/updateCompany/:id',updateCompany)

router.put('/updateJobandCompany/:id', updateJobandCompany)

export default router;