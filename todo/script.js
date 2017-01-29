
var ny = true;
var idx;
var d = new Date();
d = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
(function init() {
    $("#today").val(d);
    var result = localStorage.getItem("todolist");
    if (result == null)
        todolist = [];
    else
    {
        todolist = JSON.parse(result);
        fillList();
    }
    $("#select").on('change', function () {

        ny = false;
        idx = this.selectedIndex;
        var todo = todolist[idx];
        $("#today").val(todo.today);
        $("#lastDate").val(todo.lastDate);
        $("#group").val(todo.group);
        $("#todo").val(todo.todo);
        $("#prio").val(todo.prio);
        $("#check").prop('checked', todo.check);
        $("#remove").css('visibility','visible');
    })
})();

$("form").on("submit", function (event) {
    event.preventDefault(); //Förhindra postning
    getValuesFromFormInputs(); //Plocka ut värdena från textboxar och checkbox
    fillList();
});
$("form").on("reset", function (event) {
    event.preventDefault(); //Förhindra postning
    ny = true;
    $("#today").val(d);
    $("#lastDate").val("");
    $("#group").val("");
    $("#todo").val("");
    $("#prio").val("");
    $("#check").prop('checked', false);
    $("#remove").css('visibility', 'hidden');
   
});
$("#remove").on('click', function () {
    todolist.splice(idx, 1);
    fillList();
    save();

});
function sort1()
{
    todolist.sort(function (a, b) {
        return a.todo > b.todo;
    });
}


function fillList()
{
    sort1();
    $("select").html("");
    for (var i = 0; i < todolist.length; i++) {
        var obj = todolist[i];
        var txt = obj.group;
        if (txt.length > 30) txt = txt.substring(0, 30) + "...";
        var c = obj.check;
        console.log(c);
        if (c)
        {
            $("select").append(" + i + ">" + txt + ");
        }
        else
        {
            if(obj.lastDate<d)
                $("select").append("<option value=" + i + ">" + txt + "</option>");
            else
                $("select").append("<option value=" + i + ">" + txt + "</option>");
        }
        
    }

}

function getValuesFromFormInputs()
{
  var today=  $("#today").val();
   var lastDate= $("#lastDate").val();
   var group= $("#group").val();
   var todoText=$("#todo").val();
   var prio= $("#prio").val();
   var check = $("#check").prop('checked');
    // console.log(today, lastDate, group, todo, prio, check);
   var todo = new Todo(today, lastDate, group, todoText, prio, check);
   console.log(idx,ny);
   if (ny == false)
       todolist[idx] = todo;
    else
   todolist.push(todo); //Spara objektet i listan
   save();
}

function save()
{
    localStorage.setItem('todolist', JSON.stringify(todolist));//Spara listan i localStorage
}

//Constructor 'class'
function Todo(today,lastDate,group,todo,prio,check)
{
    this.today = today;
    this.lastDate = lastDate;
    this.group = group;
    this.todo = todo;
    this.prio = prio;
    this.check = check;
}