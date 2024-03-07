import {connection as db} from "../config/index.js"
import {hash, compare} from 'bcrypt'
import { createToken } from  "../middleware/authenticationUser.js"
class Users{
    fetchUsers(req, res) {
        const qry = `
        SELECT userID, 
        username,  
        email, 
        userPwd 
        FROM Users;
        `
        db.query(qry, (err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchUser(req, res) {
        const qry = `
        SELECT userID, 
        username,
        email, 
        userPwd, 
        FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(qry, (err, result)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    async createUser(req, res) {
        
        let data = req.body
        data.userPwd = await hash(data?.userPwd, 8)
        let user = {
            email: data.email,
            userPwd: data.userPwd
        }
        const qry = `
        INSERT INTO Users
        SET ?;
        `     
        db.query(qry, [data], (err)=>{
            if(err) {
                res.json({
                    status: res.statusCode,
                    msg: 'This email address already exist'
                })
            }else {
            
                let token = createToken(user)
                res.json({
                    status: res.statusCode,
                    token,
                    msg: 'You\'re registered'
                })
            }
        })   
    }
    async updateUser(req, res) {
        const data = req.body 
        if(data?.userPwd){
            data.userPwd = await hash(data?.userPwd, 8)
        }
            
        const qry = `
        UPDATE Users
        SET ?
        WHERE userID = ${req.params.id};+
        `
        db.query(qry, [data], (err)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                msg: "The user information is updated."
            })
        })

    }
    deleteUser(req, res) {
        const qry = `
        DELETE FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(qry, (err)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                msg: "The user information has been removed."
            })
        })
    }
    login(req, res) {
        const {emailAdd, userPwd} = req.body 
        const qry = `
        SELECT userID, 
        username, 
        email, 
        userPwd, 
        FROM Users
        WHERE email = '${email}';
        `
        db.query(qry, async(err, result)=>{
            if(err) throw err 
            if(!result?.length){
                res.json({
                    status: res.statusCode, 
                    msg: "You provided a wrong email address."
                })
            }else {
                
                const validPass = await compare(userPwd, result[0].userPwd)
                if(validPass) {
                    const token = createToken({
                        email, 
                        userPwd
                    })
                    res.json({
                        status: res.statusCode,
                        msg: "You're logged in",
                        token, 
                        result: result[0]
                    })
                }else {
                    res.json({
                        status: res.statusCode,
                        msg: "Please provide the correct password."
                    })
                }
            }
        })
    }
}
export {
    Users
}