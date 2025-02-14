import { Request, Response } from 'express';

import  Employee from "../model/employee"

export const Allemployee=async(request:Request,response:Response)=>{
    try {
        const allEmployee=await Employee.find()  
        return response.status(200).json({data:allEmployee})     
    } catch (error) {
        console.error("Error fetching employees:", error);
        return response.status(500).json({ message: "Internal Server Error" });

    }
     
}

export const newemployee=async(request:Request,response:Response)=>{
    try {
        const {name,roll,salary,doj,contact}=request.body 
        const formattedDate = doj.split("-").reverse().join("-");
        const createEmployee=await Employee.create({name,roll,salary,doj:new Date(formattedDate),contact}) 
        response.status(200).json({data:createEmployee})           
    } catch (error) {
        console.error("new data can not create:", error);
        return response.status(500).json({ message: "Internal Server Error" });

    }
     
}

export const findEmployee=async(request:Request,response:Response)=>{
    try {
       const {id}=request.params
       if(!id){return response.status(401).json({message:'data not found'})}
        const findEmployee=await Employee.findById(id,request.body,{new:true}) 
        response.status(200).json({data:findEmployee})           
    } catch (error) {
        console.error("employee not found:", error);
        return response.status(500).json({ message: "Internal Server Error" });

    }
     
}

export const editEmployee=async(request:Request,response:Response)=>{
    try {
        const {id}=request.params
        if(!id){return response.status(401).json({message:'data not found'})}
        const updateEmployee=await Employee.findByIdAndUpdate(id,request.body,{new:true}) 
        return response.status(200).json({data:updateEmployee})           
    } catch (error) {
        console.error("existing data not update:", error);
        return response.status(500).json({ message: "Internal Server Error" });
    }
     
}

export const deleteEmployee=async(request:Request,response:Response)=>{
    try {
        const {id}=request.params
        if(!id){return response.status(401).json({message:'data not found'})}
        const updateEmployee=await Employee.findByIdAndDelete(id) 
        return response.status(200).json({data:updateEmployee})           
    } catch (error) {
        console.error("existing data not delete:", error);
        return response.status(500).json({ message: "Internal Server Error" });
    }
     
}

