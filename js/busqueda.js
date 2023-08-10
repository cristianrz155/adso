db.branch.insertMany(
    [
        {
            "code":1500,
            "address":"Cauca",
            "number_employees":20,
            "banck_Code": ObjectId("64cd200d61b3454d96accf01"),

        }
    ]
)


db.contract.insertMany([
    {
        "vigilant_code": ObjectId("64cd278561b3454d96accf04"),
        "branch_code": ObjectId("64cd200d61b3454d96accf01"),
        "contract_date":new Date("2018-12-10"),
        "weapon_contract":new Date("2018-12-10")
    },{
        "vigilant_code": ObjectId("64cd278561b3454d96accf05"),
        "branch_code":ObjectId("64cd200d61b3454d96accf01"),
        "contract_date":new Date("2018-12-10"),
        "weapon_contract":new Date("2018-12-10")
    }
])
db.band.insertMany([
    {
        "code":745,
        "age":54,
    },
    {
        "vigilant_code":105,
        "age":200,
    }
])








 db.up.aggregate([
    
    {
        $match:{
            _id:ObjectId("64ccf38af14f5cb6383e76b0")
        }
    },
    {
        $lookup:{
            from:"productos",
            localField:"_id",
            foreignField:"up",
            as:"product"
        }
    
}
])
