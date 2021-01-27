import React from "react";
// import dateFns from "date-fns";
//https://blog.flowandform.agency/create-a-custom-calendar-in-react-3df1bfd0b728

class BrideCalendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  renderHeader() {}

  renderDays() {}

  renderCells() {}

  onDateClick = day => {};

  nextMonth = () => {};

  prevMonth = () => {};

  render() {
    return (
  <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
        </div>
  <div class="month"> 
  <ul>
    <li class="prev">&#10094;</li>
    <li class="next">&#10095;</li>
    <li>August<br><span style="font-size:18px">2017</span></li>
  </ul>
</div>

<ul class="weekdays">
  <li>Mo</li>
  <li>Tu</li>
  <li>We</li>
  <li>Th</li>
  <li>Fr</li>
  <li>Sa</li>
  <li>Su</li>
</ul>

<ul class="days"> 
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li><span class="active">10</span></li>
  <li>11</li>
</ul>
</div>
    );
  }
}

export default BrideCalendar;