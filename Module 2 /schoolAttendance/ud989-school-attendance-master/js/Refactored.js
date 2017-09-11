
   attendance=JSON.parse(localStorage.attendance);


var controller={

  init:function(){
    if (!localStorage.attendance) {
        console.log('Creating attendance records...');
        function getRandom() {
            return (Math.random() >= 0.5);
        }

        var nameColumns = $('tbody .name-col'),
            attendance = {};

        nameColumns.each(function() {
            var name = this.innerText;
            attendance[name] = [];

            for (var i = 0; i <= 11; i++) {
                attendance[name].push(getRandom());
            }
        });

        controller.updateLocalStorage(attendance);
    }
    view.init();
  },

  countMissing:function(){
    var  $allMissed = $('tbody .missed-col');
    $allMissed.each(function() {
        var studentRow = $(this).parent('tr'),
            dayChecks = $(studentRow).children('td').children('input'),
            numMissed = 0;

        dayChecks.each(function() {
            if (!$(this).prop('checked')) {
                numMissed++;
            }
        });

        $(this).text(numMissed);
    });
  },
  updateLocalStorage:function(data){
    localStorage.attendance=JSON.stringify(data);
  }


}

var view={
  init:function(){
    view.render();
  },
  render:function(){
    $.each(attendance, function(name, days) {
        var studentRow = $('tbody .name-col:contains("' + name + '")').parent('tr'),
            dayChecks = $(studentRow).children('.attend-col').children('input');

        dayChecks.each(function(i) {
            $(this).prop('checked', days[i]);
        });
    });

    var $allCheckboxes = $('tbody input');

    $allCheckboxes.on('click', function() {

        var studentRows = $('tbody .student'),
            newAttendance = {};

        studentRows.each(function() {
            var name = $(this).children('.name-col').text(),
                $allCheckboxes = $(this).children('td').children('input');

            newAttendance[name] = [];

            $allCheckboxes.each(function() {
                newAttendance[name].push($(this).prop('checked'));
            });
        });

        controller.countMissing();
        controller.updateLocalStorage(newAttendance);
    });


    controller.countMissing();
  }
}
$(document).ready(function(){
  controller.init();
})
