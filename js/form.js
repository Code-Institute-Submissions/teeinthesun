    /* Date Picker - set so that arrival date cannot be in the past, 
    and once arrival date chosen the departure date must be the same day or after */

    $(document).ready(function() {
        $(function() {
            var dateToday = new Date();
            var dates = $("#start-date, #end-date").datepicker({
                defaultDate: "dateToday",
                changeMonth: true,
                numberOfMonths: 1,
                minDate: dateToday,
                onSelect: function(selectedDate) {
                    var option = this.id == "start-date" ? "minDate" : "maxDate",
                        instance = $(this).data("datepicker"),
                        date = $.datepicker.parseDate(instance.settings.dateFormat ||
                            $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
                    dates.not(this).datepicker("option", option, date);
                }
            });
        });

    });

    //Submit button

    function alertFunction() {
        alert("Thank you for your enquiry, we will be in touch!");
    }