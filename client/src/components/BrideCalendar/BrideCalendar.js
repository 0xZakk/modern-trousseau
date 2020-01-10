import React from "react";
// import dateFns from "date-fns";

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
    );
  }
}

export default BrideCalendar;