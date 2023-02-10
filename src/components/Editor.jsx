import Editor from "@monaco-editor/react"
import {useRef} from "react"
import {Box,Fab} from "@mui/material"
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
export default function EditorType(props){
   
    const {language}=props
    console.info(language)
    const editorRef =useRef(null) 
    
     
     const handleEditorMount=(editor,monaco)=>{
        editorRef.current =editor;
    }

    const getEditorValue= ()=>{
      alert(editorRef.current.getValue());
    } 
    return(
        <Box sx={{height:'90%',
        marginTop:'0.5rem',
        marginX:"1rem",}}>
            <Editor
                height="85%"
                width="90%"
                theme="vs-dark"
                defaultLanguage={language}
                options={{
                    "acceptSuggestionOnCommitCharacter": true,
                    "acceptSuggestionOnEnter": "on",
                    "accessibilitySupport": "auto",
                    "autoIndent": false,
                    "automaticLayout": true,
                    "codeLens": true,
                    "colorDecorators": true,
                    "contextmenu": true,
                    "cursorBlinking": "blink",
                    "cursorSmoothCaretAnimation": false,
                    "cursorStyle": "line",
                    "disableLayerHinting": false,
                    "disableMonospaceOptimizations": false,
                    "dragAndDrop": false,
                    "fixedOverflowWidgets": false,
                    "folding": true,
                    "foldingStrategy": "auto",
                    "fontLigatures": false,
                    "formatOnPaste": false,
                    "formatOnType": false,
                    "hideCursorInOverviewRuler": false,
                    "highlightActiveIndentGuide": true,
                    "links": true,
                    "mouseWheelZoom": false,
                    "multiCursorMergeOverlapping": true,
                    "multiCursorModifier": "alt",
                    "overviewRulerBorder": true,
                    "overviewRulerLanes": 2,
                    "quickSuggestions": true,
                    "quickSuggestionsDelay": 100,
                    "readOnly": false,
                    "renderControlCharacters": false,
                    "renderFinalNewline": true,
                    "renderIndentGuides": true,
                    "renderLineHighlight": "all",
                    "renderWhitespace": "none",
                    "revealHorizontalRightPadding": 30,
                    "roundedSelection": true,
                    "rulers": [],
                    "scrollBeyondLastColumn": 5,
                    "scrollBeyondLastLine": true,
                    "selectOnLineNumbers": true,
                    "selectionClipboard": true,
                    "selectionHighlight": true,
                    "showFoldingControls": "mouseover",
                    "smoothScrolling": false,
                    "suggestOnTriggerCharacters": true,
                    "wordBasedSuggestions": true,
                    "wordWrapColumn": 80,
                    "wordWrapMinified": true,
                    "wrappingIndent": "none"
                  }}
                 onMount={handleEditorMount}
            />
           
           <Fab onClick={getEditorValue} variant="extended"  sx={{
            marginTop:"1rem"
           }}>
                <PlayCircleFilledWhiteOutlinedIcon sx={{ mr: 1 }} />
                Run
            </Fab>
      </Box>
    )
}