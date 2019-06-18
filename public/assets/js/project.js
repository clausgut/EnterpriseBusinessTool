$(document).ready(function() {
  console.log('file loaded');

  function passwordFunction() {
    document.getElementById('forgotPassLink').innerHTML =
      'Thank you. A link has been sent to your email to reset your username.';
  }

  function userFunction() {
    document.getElementById('forgotUserLink').innerHTML =
      'Thank you. A link has been sent to your email to reset your password.';
  }

  function regFunction() {
    document.getElementById('regisConfirmation').innerHTML =
      'Thank You. Registration is complete and added to database.';
  }

  $(document).ready(function() {

    $(".logInBtn").on("submit", function(event) {
      event.preventDefault();
      var logInInfo = {
        email: $(this).children("#email").val(),
      };
  
      $.ajax({
        method: "GET",
        url: "/dashboard",
        data: logInInfo
      }).then(function(data) {
        // reload page to display devoured burger in proper column
        location.reload();
      });
  
    });
  });
  

  $('#hrEmployeeDashboard').on('click', function() {
    const access = $('#whoami').data("access");
    $.ajax({
      method: 'GET',
      url: '/api/employees?access=' + access
    }).then(function(data) {
      for (let i = 0; i < data.length; i++) {
        const row = $(`<tr class="employeeData" data-emp="${data[i].id}">`);
        const firstName = $(`<td>${data[i].first_name}</td>`);
        const lastName = $(`<td>${data[i].last_name}</td>`);
        const address = $(`<td>${data[i].address}</td>`);
        const startDate = $(`<td>${data[i].start_date}</td>`);
        const salary = $(`<td>${data[i].annual_salary}</td>`);
        const title = $(`<td>${data[i].role}</td>`);
        const schedule = $(`<td>${data[i].weekly_schedule}</td>`);
        const shift = $(`<td>${data[i].scheduled_shift}</td>`);

        row.append(firstName, lastName, address, startDate, salary, title, schedule, shift);

        $('#employeeList').append(row);
      }

      refreshEmployeeClickListener();
    });
  });

  function refreshEmployeeClickListener() {
    console.log('ran this func');
    $('.employeeData').on('click', function() {
      // This is here in case you want to click on a row and do something with the employee
      console.log('You clicked on employee with ID ' + $(this).data('emp'));
      $.ajax({
        method: 'GET',
        url: '/api/employee/' + $(this).data('emp')
      }).then(function(data) {
        console.log(data);
        // You could take the HR rep to another page or something to edit the user data and PUT that back to the API
      });
    });
  }
});

