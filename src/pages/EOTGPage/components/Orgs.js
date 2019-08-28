import React, {Component} from 'react';
import $ from 'jquery';

/**
 * jQuery.fn.sortElements
 * --------------
 * @author James Padolsey (http://james.padolsey.com)
 * @version 0.11
 * @updated 18-MAR-2010
 * --------------
 * @param Function comparator:
 *   Exactly the same behaviour as [1,2,3].sort(comparator)
 *   
 * @param Function getSortable
 *   A function that should return the element that is
 *   to be sorted. The comparator will run on the
 *   current collection, but you may want the actual
 *   resulting sort to occur on a parent or another
 *   associated element.
 *   
 *   E.g. $('td').sortElements(comparator, function(){
 *      return this.parentNode; 
 *   })
 *   
 *   The <td>'s parent (<tr>) will be sorted instead
 *   of the <td> itself.
 */
/*jQuery.fn.sortElements = (function(){
  
    var sort = [].sort;
    
    return function(comparator, getSortable) {
        
        getSortable = getSortable || function(){return this;};
        
        var placements = this.map(function(){
            
            var sortElement = getSortable.call(this),
                parentNode = sortElement.parentNode,
                
                // Since the element itself will change position, we have
                // to have some way of storing it's original position in
                // the DOM. The easiest way is to have a 'flag' node:
                nextSibling = parentNode.insertBefore(
                    document.createTextNode(''),
                    sortElement.nextSibling
                );
            
            return function() {
                
                if (parentNode === this) {
                    throw new Error(
                        "You can't sort elements if any one is a descendant of another."
                    );
                }
                
                // Insert before flag:
                parentNode.insertBefore(this, nextSibling);
                // Remove flag:
                parentNode.removeChild(nextSibling);
                
            };
            
        });
       
        return sort.call(this, comparator).each(function(i){
            placements[i].call(getSortable.call(this));
        });
        
    };
    
  })();

  $(function(){
    $('#companies').find('.company').filter(function() {
      return $(this).index() === 0;
    }).sortElements(function(a, b) {
      if ($.text([a]) === $.text([b])) return 0;
  
      return $.text([a]) > $.text([b]) ? 1 : -1;
    }, function() {
      return this.parentNode;
    });
  
    var columnMap = {
      name: 1,
      industry: 2,
      position: 3,
      workAuth: 4
    };
  
    var activeFilters = {
      industry: "",
      position: "",
      workAuth: "",
      name: "",
    };
  
    var industryOptions = $('.industry-filter__options');
    var positionOptions = $('.position-filter__options');
    var workAuthOptions = $('.authorisation-filter__options');
  
    function createFilterOptions() {
      var uniqueIndustries = {};
      var uniquePositions = {};
      var uniqueWorkAuths = {};
  
  
      $('#companies .company').each(function() {
        var industryElem = $('.company__industry span', this);
        var positionElem = $('.company__position span', this);
        var workAuthElem = $('.company__auth span', this);
  
        var industries = industryElem.text().split(', ');
        var positions = positionElem.text().split(', ');
        var workAuths = workAuthElem.text().split(', ');
  
        console.log(industries, positions, workAuths)
        
        industries.forEach(function(industry) {
          if (Object.keys(uniqueIndustries).indexOf(industry) === -1) {
            uniqueIndustries[industry] = 1;
          } else {
            uniqueIndustries[industry]++;
          }
        });
  
        positions.forEach(function(position) {
          if (Object.keys(uniquePositions).indexOf(position) === -1) {
            uniquePositions[position] = 1;
          } else {
            uniquePositions[position]++;
          }
        });
  
        workAuths.forEach(function(workAuth) {
          if (Object.keys(uniqueWorkAuths).indexOf(workAuth) === -1) {
            uniqueWorkAuths[workAuth] = 1;
          } else {
            uniqueWorkAuths[workAuth]++;
          }
        });
      });
      
      Object.keys(uniqueIndustries).forEach(function(industry) {
        var newOption = $('<button/>',
        {
          'html': industry + ' <span class="filter__badge badge badge-pill">' + uniqueIndustries[industry] + '</span>',
          'class': 'industry-filter__option filter__option dropdown-item',
          'data-filter': industry
        });
        industryOptions.append(newOption);
      });
  
      Object.keys(uniquePositions).forEach(function(position) {
        var newOption = $('<button/>',
        {
          'html': position + ' <span class="filter__badge badge badge-pill">' + uniquePositions[position] + '</span>',
          'class': 'position-filter__option filter__option dropdown-item',
          'data-filter': position
        });
        positionOptions.append(newOption);
      });
  
      Object.keys(uniqueWorkAuths).forEach(function(authorisation) {
        var newOption = $('<button/>',
        {
          'html': authorisation + ' <span class="filter__badge badge badge-pill">' + uniqueWorkAuths[authorisation] + '</span>',
          'class': 'authorisation-filter__option filter__option dropdown-item',
          'data-filter': authorisation
        });
        workAuthOptions.append(newOption);
      });
    };
  
    function setIndustryFilter() {
      $('.industry-filter__option').click(function() {
        var filter = $(this).attr('data-filter');
        activeFilters.industry = filter;
        var clearBtn = $('<button />',
        {
          'html': '<i class="fas fa-times"></i>',
          'class': 'filter__clear btn',
          'click': clearIndustryFilter
        });
        var filterElem = $(".industry-filter");
        filterElem.html(clearBtn);
        filterElem.append(filter);
        onFilterChanged();
      });
    };
  
    function setCompanyFilter() {
      $('.company-table__search').bind('input', function() {
        var filter = $(this).val();
        activeFilters.name = filter;
        onFilterChanged();
      });
    }
  
    function setPositionFilter() {
      $('.position-filter__option').click(function() {
        var filter = $(this).attr('data-filter');
        activeFilters.position = filter;
        var clearBtn = $('<button />',
        {
          'html': '<i class="fas fa-times"></i>',
          'class': 'filter__clear btn',
          'click': clearPositionFilter
        });
        var filterElem = $(".position-filter");
        filterElem.html(clearBtn);
        filterElem.append(filter);
        onFilterChanged();
      });
    };
  
    function setAuthorisationFilter() {
      $('.authorisation-filter__option').click(function() {
        var filter = $(this).attr('data-filter');
        activeFilters.workAuth = filter;
        var clearBtn = $('<button />',
        {
          'html': '<i class="fas fa-times"></i>',
          'class': 'filter__clear btn',
          'click': clearAuthorisationFilter
        });
        var filterElem = $(".authorisation-filter");
        filterElem.html(clearBtn);
        filterElem.append(filter);
        onFilterChanged();
      });
    };
  
    function onFilterChanged() {
      $('#companies .company').each(function() {
        var name = $('.company__name', this).text();
        var industry = $('.company__industry span', this).text();
        var position = $('.company__position span', this).text();
        var workAuth = $('.company__auth span', this).text();
  
        if (name.indexOf(activeFilters.name) === -1) {
          $(this).hide();
        } else if (industry.indexOf(activeFilters.industry) === -1) {
          $(this).hide();
        } else if(position.indexOf(activeFilters.position) === -1) {
          $(this).hide();
        } else if(workAuth.indexOf(activeFilters.workAuth) === -1) {
          $(this).hide();
        } else {
          $(this).show();
        }
      });
    };
  
    function clearIndustryFilter() {
      activeFilters.industry = "";
      $(".industry-filter").text('Industry');
      onFilterChanged();
    }
  
    function clearPositionFilter() {
      activeFilters.position = "";
      $(".position-filter").text('Position');
      onFilterChanged();
    }
  
    function clearAuthorisationFilter() {
      activeFilters.workAuth = "";
      $(".authorisation-filter").text('Work Authorisation');
      onFilterChanged();
    }
  
    createFilterOptions();
    setIndustryFilter();
    setPositionFilter();
    setAuthorisationFilter();
    setCompanyFilter();
  });*/



class Orgs extends React.Component {

    render() {
        /*return (
            <section className="w-100 eotg-orgs d-flex flex-column align-items-center justify-content-center" id="orgs">
            
                <div className="container">
                    <div className="row text-center">
                        <h1 className="text-center w-100">Attending Organizations</h1>     


                        
                                           
                    </div>
                </div>
            </section>
        )*/

        return (
        <section className="tabling" id="companies">
            <div className="container">
                <h1 className="tabling__header mb-5">Attending Companies</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md mt-3">
                        <input type="text" placeholder="Company" className="form-control company-table__search"/>
                    </div>
                    <div className="col-md mt-3">
                        <div className="dropdown">
                        <button className="filter industry-filter btn dropdown-toggle" type="button" id="industryDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Industry
                        </button>
                        <div className="filter__options dropdown-menu industry-filter__options" aria-labelledby="industryDropdown">
                        </div>
                        </div>
                    </div>

                <div className="col-md mt-3">
                <div className="dropdown">
                <button className="filter position-filter btn dropdown-toggle" type="button" id="positionDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Position
                </button>
                <div className="filter__options dropdown-menu position-filter__options" aria-labelledby="industryDropdown">
                </div>
                </div>
                </div>
                <div className="col-md mt-3">
                <div className="dropdown">
                <button className="filter authorisation-filter btn dropdown-toggle" type="button" id="workAuthDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Work Authorization
                </button>
                <div className="filter__options dropdown-menu authorisation-filter__options" aria-labelledby="industryDropdown">
                </div>
                </div>
                </div>
            </div>

            <div id="companies">
                <div className="container p-0 mt-5 company">
                <div className="row">
                    <div className="col-md-4 align-self-center">
                    <img src="./assets/sponsors/astranis.svg" className="company__featurette" />
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                    <div className="company__content">
                        <a className="company__name" href="https://www.astranis.com" target="_blank"> Astranis </a>
                        <p className="company__description">
                            We are taking on one of humanity's most important challenges. Four billion people do not have access to the internet. Astranis is going to change that. We are building the next generation of smaller, lower-cost telecommunications satellites to bring the world online.
                        </p>
                    <div className="company__industry">
                        Industry: <span>Mechanical, Aerospace</span>
                        </div>
                        <div className="company__position">
                            Position: <span>Full-time, Internship</span> 
                        </div>
                        <div className="company__auth">
                        Work Authorization: <span>U.S. Citizen</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="container p-0 mt-5 company">
                <div className="row">
                    <div className="col-md-4 align-self-center">
                    <img src="./assets/sponsors/astranis.svg" className="company__featurette" />
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                    <div className="company__content">
                        <a className="company__name" href="https://www.astranis.com" target="_blank"> Astranis </a>
                        <p className="company__description">
                            We are taking on one of humanity's most important challenges. Four billion people do not have access to the internet. Astranis is going to change that. We are building the next generation of smaller, lower-cost telecommunications satellites to bring the world online.
                        </p>
                    <div className="company__industry">
                        Industry: <span>Mechanical, Aerospace</span>
                        </div>
                        <div className="company__position">
                            Position: <span>Full-time, Internship</span> 
                        </div>
                        <div className="company__auth">
                        Work Authorization: <span>U.S. Citizen</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>       
          {/*</table>*/}
        </div>

        {/*<script type="text/javascript" src="/public/sortElements.js"></script>
    <script type="text/javascript" src="/public/company-table.js"></script>*/}

    </section>
        )
    }
}

export default Orgs;