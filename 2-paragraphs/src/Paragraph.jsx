import { faker } from "@faker-js/faker";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";

function Paragraph() {
  // State
  const [paragraphs, setParagraphs] = useState([]);
  const [selectedParagraphIndex, setSelectedParagraphIndex] = useState(null);
  const [copy, setCopy] = useState(null);

  // Event handlers
  const handleGenerateParagraph = () => {
    setParagraphs((p) => [
      ...p,
      {
        verticalMargin: 0,
        color: faker.color.rgb(),
        text: faker.lorem.paragraph(),
      },
    ]);
  };

  const selectedParagraph = paragraphs[selectedParagraphIndex];

  const handleSelectParagraph = (index) => {
    setSelectedParagraphIndex(index);
    setCopy({ ...paragraphs[index] });
  };

  const handleFormChange = (event) => {
    setParagraphs((prev) =>
      prev.map((p, i) => (i === selectedParagraphIndex ? { ...p, [event.target.name]: event.target.value } : p))
    );
  };

  const handleColorChange = (color) => {
    setParagraphs((prev) => prev.map((p, i) => (i === selectedParagraphIndex ? { ...p, color } : p)));
  };

  const handleFormReset = () => {
    setParagraphs((prev) => prev.map((p, i) => (i === selectedParagraphIndex ? copy : p)));
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* Paragraphs (left side) */}
          <div className="col-12 col-lg-8 vh-100 max-vh-100 p-4 overflow-y-scroll">
            <h3>Paragraphs</h3>

            {paragraphs.length > 0 ? (
              paragraphs.map((p, i) => (
                <p
                  key={i}
                  style={{
                    marginTop: p.verticalMargin + "px",
                    marginBottom: p.verticalMargin + "px",
                    color: p.color,
                    border: selectedParagraphIndex === i ? "2px solid red" : undefined,
                  }}
                  onClick={() => handleSelectParagraph(i)}
                >
                  {p.text}
                </p>
              ))
            ) : (
              <p>No paragraps yet!</p>
            )}
          </div>

          {/* Controls (right side) */}
          <div className="col-12 col-lg-4 p-4">
            <h3>Controls</h3>

            <p>You can find the controls for this page below.</p>

            {/* Button for creating a new paragraph */}
            <div className="card mb-3">
              <div className="card-body">
                <h4>Create a new paragraph</h4>
                <p>You can create a new paragraph in this section by clicking the button below.</p>
                <button className="btn btn-primary" onClick={handleGenerateParagraph}>
                  Generate random paragraph
                </button>
              </div>
            </div>

            {/* Form for editing the selected paragraph */}
            {selectedParagraphIndex !== null && (
              <div className="card">
                <div className="card-body">
                  <h4>Edit the selected paragraph</h4>
                  <p>You can edit the selected paragraph in this section.</p>

                  <hr />

                  <form className="d-flex flex-column gap-3">
                    <div className="form-group">
                      <label htmlFor="verticalMargin" className="form-label">
                        Vertical margin: {selectedParagraph.verticalMargin}px
                      </label>
                      <input
                        type="range"
                        className="form-control"
                        id="verticalMargin"
                        name="verticalMargin"
                        placeholder="Vertical margin"
                        min="-100"
                        max="100"
                        step="1"
                        value={selectedParagraph.verticalMargin}
                        onChange={handleFormChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="color" className="form-label">
                        Color
                      </label>

                      <input
                        type="text"
                        className="form-control mb-3"
                        id="color"
                        name="color"
                        placeholder="Hex color"
                        value={selectedParagraph.color}
                        onChange={handleFormChange}
                      />

                      <HexColorPicker color={selectedParagraph.color} onChange={handleColorChange} />
                    </div>

                    {/* Cancel button */}
                    <div>
                      <button className="btn btn-danger" type="button" onClick={handleFormReset}>
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Paragraph;
