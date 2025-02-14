import express from "express"
import { Allemployee, deleteEmployee, editEmployee, filterEmployee, findEmployee, newemployee } from "../controller/employee"


const router =  express.Router()

router.get('/employees', Allemployee)
router.post('/newEmployee',newemployee)
router.get('/findEmp/:id',findEmployee)
router.put('/updateEmployee/:id',editEmployee)
router.delete('/deleteEmployee/:id',deleteEmployee)
router.get('/employee',filterEmployee)

export default router
