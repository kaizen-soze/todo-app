# To do App
This app is intended to be an HTML5 application that functions as a to-do list.

## Interface
At the top of the page, the app name is displayed prominently. Header, center.

The left side of the page has a sidebar. It contains filters for viewing completeness of tasks, any desired category, desired priority, and sort order.

Available completeness states are: Completed, Not Completed, and All. Defaults to All.

When the category filter is selected, the view of available tasks is restricted only to tasks that match the selected category. Categories are user-defined.

When the priority filter is selected, the view of available tasks is retricted only to tasks that match the selected priority. Available priorities are: High, Normal, and Low

When the sort order is chosen, the view of available tasks is re-ordered to display tasks within the desired order. Available sorting options: Chronological, Priority, Alphabetical. Defaults to chronological due date.

Below sort order is an option to expand listings. When selected, all tasks are expanded fully and the full contents of their tasks are displayed.

At the very bottom of the sidebar is a link called "Settings." Clicking that opens a modal that allows you to make changes to the app as a whole, such as managing categories.
 
The right side of the page is dedicated to listing all tasks available in the current category.

When a task is completed, a notification will display at the bottom of the page saying "Congratulations! You've completed x tasks today!" The notification disappears after a few moments. The task itself is crossed out once completed. The task remains on the list depending on the chosen category display.

## Completeness
Available completeness options are: Completed, Incomplete, and All.

**Completed** view shows all completed tasks. Tasks in this view default to grayed-out, to convey that they have been finished.

The **Incomplete** view shows only incomplete tasks. These tasks are not grayed out and appear normally.

The **All** view shows both complete and incomplete tasks.

## Categories
When the category filter is selected, the view of available tasks is restricted only to tasks that match the selected category. Categories are user-defined.

The user defined available categories. Each task may have an associated category, but it is optional. Tasks may be associated with multiple categories.

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

Clicking the icon on the right of the task opens the task edit dialog.

Tasks are completed by checking the checkbox on the left of the task.

## Adding a task

When the user clicks the plus icon from the main view, a task dialog will appear that allows the user to specify what information the task should contain.

The following fields are available:

1. Task Summary

2. Task Description (optional)

3. Priority - Defaults to normal

4. Due date (optional)

5. Categories (optional)
