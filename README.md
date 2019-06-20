# To do App
This app is intended to be an HTML5 application that functions as a to-do list.

## Interface
At the top of the page, the app name is displayed prominently. Header, center.

The left side of the page has a sidebar. It contains filters for viewing completeness of tasks, desired priority, and sort order.

Available completeness states are: Completed, Not Completed, and All. Defaults to All.

When the priority filter is selected, the view of available tasks is retricted only to tasks that match the selected priority. Available priorities are: High, Normal, and Low

When the sort order is chosen, the view of available tasks is re-ordered to display tasks within the desired order. Available sorting options: Chronological, Priority, Alphabetical. Defaults to chronological due date.
 
The right side of the page is dedicated to listing all tasks available in the current category.

To edit the task name/description, click on the text describing the task and you'll be given the option to edit the text in place.

To change the priority of a task, click on the priority icon.

To change the date of a task, click on the date and a calendar pop-up will appear.

## Completeness
Available completeness options are: Completed, Incomplete, and All.

**Completed** view shows all completed tasks. Tasks in this view default to grayed-out, to convey that they have been finished.

The **Incomplete** view shows only incomplete tasks. These tasks are not grayed out and appear normally.

The **All** view shows both complete and incomplete tasks.

## Sort Order
The following options are available for sorting tasks: Chronological, Priority, Alphabetical

Chronological sorting Ascending sorts tasks by due date, in ascending order. First would be June 23, then second would be July 4th.

Chronological sorting Descending sorts tasks by due date, in ascending order. First would be July 4, then second would be June 23.

Descending Priority sorting displays highest priorities towards the top.

Ascending Priority sorting displays lowest priorities towards the top.

Ascending Alphabetical sorts the tasks by summary, with tasks going in ascending alphabetical order. A is first, then Z.

Descending Alphabetical sorts the tasks by summary, with tasks going in descending alphabetical order. Z is first, then A.

## Tasks

A task is a record of what the user needs to accomplish.

Tasks are displayed in a list according to the selected filters on the left of the screen.

A task contains a checkbox on the left-hand side of the task. The middle of the task contains a short summary of the task. The due date, if chosen, is displayed as well. The far right of the task contains an icon, that, when clicked, allows you to edit the task. 

The priority of a task is represented by the task's background color. High priority is red, normal priority is white, and low priority is a type of blue.

If the summary text is truncated, the full summary displays in a tooltip.

Tasks are completed by checking the checkbox on the left of the task.

## Adding a task

When the user clicks the plus icon from the main view, a task dialog will appear that allows the user to specify what information the task should contain.

The following fields are available:

1. Task Description

2. Priority - Defaults to normal

3. Due date (optional)
