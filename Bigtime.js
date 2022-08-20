$(document).ready(function () {

    $.getJSON("bigtimeo.json",
        function (data) {
            var student = '';

            $.each(data, function (key, value) {

                student += '<tr>';
                student += '<td>' +
                    value.id + '</td>';

                student += '<td>' +
                    value.com_name + '</td>';

                student += '<td>' +
                    value.mail + '</td>';

                student += '<td>' +
                    value.mob_no + '</td>';

                student += '<td>' +
                    value.Projec_Name + '</td>';

                student += '<td>' +
                    value.project_description + '</td>';

                student += '<td>' +
                    value.created_at.toString().replace('T','') + '</td>';

                student += '<td>' +
                    value.updated_at.toString().replace('T','') + '</td>';

                student += '</td>';


            });





            $('#table').append(student);
        });

    var d = '2022-08-17T15:05:41.032042'
    var d1 = d.split('')[10];
    // var abc = d1.replace('T', ' ');
    var abc = d1.c(10);
    console.log("abc",abc );
    
});

