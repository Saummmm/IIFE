let gradesObjWithMutators=(
    function() 
    {
        let myGrades = [92,95,88,0,55,91];

        let average = function() 
        {
            let total = myGrades.reduce((a,b) => a+b, 0);
            return "Average is: " + total/myGrades.length;
        }

        let maxGrade = function() 
        {
            let max = myGrades.reduce((a,b) => (a>b)? a:b);
            return "Maximum grade is: " + max;
        }

        let getGrades = function()
        {
            return myGrades;
        }
        let setGrades = function(newGrades)
        {
            myGrades = newGrades;
        }

        return {
            average: average,
            maxGrade: maxGrade,
            getGrades: getGrades,
            setGrades: setGrades
        }
    }
)();

console.log(gradesObjWithMutators.getGrades());
console.log(gradesObjWithMutators.average());
console.log(gradesObjWithMutators.maxGrade());

console.log(gradesObjWithMutators.setGrades([5,6,7,9]));
console.log(gradesObjWithMutators.getGrades());
console.log(gradesObjWithMutators.average());
console.log(gradesObjWithMutators.maxGrade());