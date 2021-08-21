nameofthestudentarray=[];
function submit()
{
    var displaystudentarray=[];
    for (var i=1; i<=4;i++)
    {
        var nameofthestudent=document.getElementById("name_of_the_student_"+i).value;
        console.log(nameofthestudent);
        nameofthestudentarray.push(nameofthestudent);
    }
    console.log(nameofthestudentarray);
    var lengthofarray=nameofthestudentarray.length;
    console.log(lengthofarray);
    for (var k=0;k<lengthofarray;k++)
    {
        displaystudentarray.push("<h4>NAME- "+nameofthestudentarray[k]+"</h4>");
        console.log(displaystudentarray);
    }
    console.log(displaystudentarray);
    document.getElementById("display_name_with_commas").innerHTML=displaystudentarray;
    var remove_commas=displaystudentarray.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting()
{
    nameofthestudentarray.sort();
    console.log(nameofthestudentarray);
    var displaystudentarraysorting=[];
    var lengthofarray=nameofthestudentarray.length;
    console.log(lengthofarray);
    for (var k=0;k<lengthofarray;k++)
    {
        displaystudentarraysorting.push("<h4>NAME- "+nameofthestudentarray[k]+"</h4>");
        console.log(displaystudentarraysorting);
    }
    
    var remove_commas=displaystudentarraysorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}
