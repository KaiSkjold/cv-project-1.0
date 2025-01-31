export default function ResumePage() {

    return (

        <div>
            <div>
                <h2>Resume</h2>
                <p>Fill out the fields below to start creating your resume</p>
            </div>
            <div>
                {/* TODO component that wraps smaller add field components */}
                <p>Name</p>
                <p>Contact Information</p>
                <p>Social Networks</p>
                <p>Links</p>
                <p>Personal Information</p>
                <p>Portrait</p>
                <p>Skills</p>
                <p>Languages</p>
                <p>Education</p>
                <p>Work Experience</p>
                <p>Volunteer Work Experience</p>
            </div>
            <div>
                {/* TODO Add a preview that automatically updates? Or only button? */}
                <p>Preview</p>
                {/* TODO Submit button that saves resume information
                 to a final version added to list below */}
            </div>
            <div>
                {/* TODO table, click on row to preview saved resume */}
                <p>List of resumes available</p>
            </div>

        </div>
        
    );
}