export default function CoverLetterPage() {

    return (
        <div>
            <div>
                <h2>Cover Letter</h2>
                <p>Add your cover letter information in the forms below</p>
            </div>
            <div>
                {/* TODO component that wraps smaller add field components */}
                <p>Recipient</p>
                <p>Content of letter</p>
                <p>Sender</p>
            </div>
            <div>
                {/* TODO Add a preview that automatically updates? Or only button? */}
                <p>Preview</p>
                {/* TODO Submit button that saves resume information
                 to a final version added to list below */}
            </div>
            <div>
                {/* TODO table, click on row to preview saved cover letters */}
                <p>List of cover letters available</p>
            </div>

        </div>
    );
}