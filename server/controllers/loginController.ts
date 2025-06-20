const loginController: any = {};

loginController.getAllUsers = async (req: any, res: any) => { //! Might not need this function if we don't need to ever pull all users
    try{
    //     const users: any = await Login.find({});
    //     res.status(200).json(users);
    }
    catch(err: any){
        console.log('error in getAllUsers:', err.message);
        return res.status(500).json({error: 'Failed to get users'})
    }
};

loginController.createUser = async (req:any, res:any, next:any) => {
    try{

    }
    catch(err){

    }
}

loginController.verifyUser = async (req: any, res: any, next: any)=> {
    try{

    }
    catch(err){

    }
}

export default loginController;