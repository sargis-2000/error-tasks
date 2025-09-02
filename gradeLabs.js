let studentLabs2 = [
    {
        student: "Blake",
        myCode: function (num) {
            return Math.pow(num, num);
        },
    },

    {
        student: "Jessica",
        runLab: function (num) {
            return Math.pow(num, num);
        },
    },

    {
        student: "Mya",
        runLab: function (num) {
            return num * num;
        },
    },
]

function gradeLabs(labs) {
    for (let lab of labs) {
        let result;

        try {
            result = lab.runLab(3)
        } catch (error) {
            result = 'Error thrown'
        }

        console.log(`${lab.student}: ${result}`)
    }
}

gradeLabs(studentLabs2)