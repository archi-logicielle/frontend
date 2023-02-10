import Editor from "@monaco-editor/react"
import {useRef} from "react"
import {Box,Fab} from "@mui/material"
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import axios from 'axios';
import parse from 'html-react-parser';

export default function EditorType(props){
   
    const {language,language_id}=props
    console.info(language)
    const editorRef =useRef(null) 
     
     const handleEditorMount=(editor,monaco)=>{
        editorRef.current =editor;
    }


    const getEditorValue=  async ()=>{
      alert(editorRef.current.getValue(),language_id);
      const options = {
        method: 'POST',
        url: 'https://judge0-ce.p.rapidapi.com/submissions/?base64_encoded=false&fields=*',
        headers: {
          'Content-Type': 'application/json',
          'content-type': 'application/json',
          'X-RapidAPI-Key': '9dc2f20cd1msha8831e2c3f29c40p14db9djsnc8f462468e01',
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
          accept: "application/json"
        },
        data: JSON.stringify({
          source_code: `${editorRef.current.getValue()}`,
          stdin: '',
          language_id: language_id
        }),
      };
      await axios.request(options).then(function (response) {
        console.log(response.data);
        const token=response.data.token
        console.log(token)
        const optionsGet = {
          method: 'GET',
          url: `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=true`,
          headers: {
            'X-RapidAPI-Key': 'af4b035371msh2996afbaa09fd30p135789jsn0a3c647fecec',
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
            'Content-Type': 'application/json',
            'content-type': 'application/json',
          },
        }
        axios.request(optionsGet).then(function (response) {
          if (response.data.stdout!=null){
          const output=(response.data.stdout)
          alert(window.atob(output))}else{
            const errOutput=(response.data.stderr)
            alert(window.atob(errOutput))
          }
        }).catch(function (error) {
          console.error(error);
        }) 


      }).catch(function (error) {
        console.error(error);
      });
     /* await axios.post('https://judge0-ce.p.rapidapi.com/submissions',{headers:{
          "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
          "x-rapidapi-key": "af4b035371msh2996afbaa09fd30p135789jsn0a3c647fecec", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
          "Content-Type": "application/json",
          accept: "application/json",},
          body: 
            JSON.stringify({
              source_code: editorRef.current.getValue(),
              stdin: "",
              language_id: language_id
            }),
        },).then((res)=>console.log(res)).catch((err)=>console.log(err)) */
      //In this function we can send the code to judge0 throught a POST request  and GET the output
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