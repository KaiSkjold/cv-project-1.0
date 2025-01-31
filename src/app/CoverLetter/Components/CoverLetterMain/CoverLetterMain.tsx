import CoverLetterContent from "../CoverLetterContent";
import CoverLetterRecipient from "../CoverLetterRecipient";

export default function CoverLetterMain() {

    return (
        <div className="flex flex-col gap-4 p-4">
            <CoverLetterRecipient />
            <CoverLetterContent />
        </div>

    );
}