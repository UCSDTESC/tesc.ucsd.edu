import $ from 'jquery';

$(function () {
    // look in 'eotg-org' div for the stuff
    $('#orgs')
        .find('.eotg-org')
        .filter(function () {
            return $(this).index() === 0;
        })
        .sortElements(
            function (a, b) {
                if ($.text([a]) === $.text([b])) return 0;

                return $.text([a]) > $.text([b]) ? 1 : -1;
            },
            function () {
                return this.parentNode;
            }
        );

    // the current active filters
    var activeFilters = {
        department: '',
        name: '',
    };

    // holds the list of all department options
    var departmentOptions = $('.eotg-department-filter__options');

    function createFilterOptions() {
        var uniqueDepartments = {};

        // look in each eotg-org__content and parse the departments
        $('#orgs .eotg-org__content').each(function () {
            var departmentElem = $('.eotg-org__department span', this);

            var departments = departmentElem.text().split(', ');

            // count the number of each department
            departments.forEach(function (department) {
                if (Object.keys(uniqueDepartments).indexOf(department) === -1) {
                    uniqueDepartments[department] = 1;
                } else {
                    uniqueDepartments[department]++;
                }
            });
        });

        // sort the departments
        var sortedDepartments = Object.keys(uniqueDepartments).sort();

        // add "All Engineering" option first so it shows up first
        var newOption = $('<button/>', {
            html:
                'All Engineering <span class="eotg-filter__badge badge badge-pill">' +
                uniqueDepartments['All Engineering'] +
                '</span>',
            class:
                'eotg-department-filter__option eotg-filter__option dropdown-item',
            'data-filter': 'All',
        });
        departmentOptions.append(newOption);

        // remove "All Engineering" from the list of departments left to add to the dropdown
        var indexOfAll = sortedDepartments.indexOf('All Engineering');
        if (indexOfAll !== -1) {
            sortedDepartments.splice(indexOfAll, indexOfAll + 1);
        }

        sortedDepartments.forEach((department) => {
            var newOption = $('<button/>', {
                html:
                    department +
                    ' <span class="eotg-filter__badge badge badge-pill">' +
                    uniqueDepartments[department] +
                    '</span>',
                class:
                    'eotg-department-filter__option eotg-filter__option dropdown-item',
                'data-filter': department,
            });
            departmentOptions.append(newOption);
        });
    }

    function setDepartmentFilter() {
        $('.eotg-department-filter__option').click(function () {
            var filter = $(this).attr('data-filter');
            activeFilters.department = filter;
            var clearBtn = $('<button />', {
                html: '<i class="fas fa-times"></i>',
                class: 'eotg-filter__clear btn',
                click: clearDepartmentFilter,
            });
            var filterElem = $('.eotg-department-filter');
            filterElem.html(clearBtn);
            filterElem.append(filter);
            onFilterChanged();
        });
    }

    function setOrganizationFilter() {
        $('.eotg-org-table__search').bind('input', function () {
            var filter = $(this).val();
            activeFilters.name = filter.toLowerCase();
            onFilterChanged();
        });
    }

    function onFilterChanged() {
        $('#orgs .eotg-org__content').each(function () {
            var name = $('.eotg-org__name', this).text().toLowerCase();
            var department = $('.eotg-org__department span', this).text();

            if (name.indexOf(activeFilters.name) === -1) {
                $(this).hide();
            } else if (department.indexOf(activeFilters.department) === -1) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    }

    function clearDepartmentFilter() {
        activeFilters.department = '';
        $('.eotg-department-filter').text('Department');
        onFilterChanged();
    }

    createFilterOptions();
    setDepartmentFilter();
    setOrganizationFilter();
});
