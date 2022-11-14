import ChecklistItem from "./ChecklistItem"
import SuggestionItem from "./SuggestionItem"

function WorkoutCreation () {
    return (
        <div>
            <h2>Workout Checklist</h2>
            <div id="checklist">

                {/* {checklistArray} */}
                {/* <ChecklistItem workoutName="Chest bro"/> */}
            </div>
            <div id="suggestions">
                <h2>Suggestions</h2>
                {/* {suggestionsArray} */}
                {/* <SuggestionItem workoutName="Chest bro" image="data:image/jpeg;base64,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" instruction="Push ups"/> */}

            </div>

        </div>
    )
}

export default WorkoutCreation
