import { useEffect, useState } from 'react';
import { Headphones, Type, Play, Square, Minus, Plus, Check, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWorkspace } from '@/stores/workspace';
const passage = 'The internet is a place for all of us. A place to learn something new, share an idea, and connect with the world. Everyone deserves to feel at home here.';
export default function ReadingDemo() {
  const { demoTool, setDemoTool } = useWorkspace();
  const [size, setSize] = useState(18);
  const [playing, setPlaying] = useState(false);
  const [message, setMessage] = useState('');
  useEffect(() => () => { window.speechSynthesis?.cancel(); }, []);
  const speak = () => {
    if (!window.speechSynthesis) { setMessage('Your browser does not support this audio demo. Try Chrome.'); return; }
    if (playing) { window.speechSynthesis.cancel(); setPlaying(false); return; }
    const speech = new SpeechSynthesisUtterance(passage);
    speech.onend = () => setPlaying(false);
    speech.onerror = () => { setPlaying(false); setMessage('Audio could not play. Please try again.'); };
    window.speechSynthesis.cancel(); window.speechSynthesis.speak(speech); setPlaying(true);
  };
  return <div className="demo-window"><div className="window-chrome"><span className="window-dots">● ● ●</span><span>your everyday web, made easier</span><span className="demo-label">LIVE DEMO</span></div><div className="demo-body"><div className="sample-article"><span className="eyebrow">A LITTLE MORE POSSIBILITY</span><h3>A web that welcomes you.</h3><p style={{ fontSize: size }}>{passage}</p><div className="article-rule" /><span className="sample-caption"><Check size={14} /> Your content. Your pace. Your way.</span></div><aside className="demo-panel"><div className="demo-panel-title"><img src="/logo-green.png" alt="" /><strong>Your reading companion</strong></div><p>Make yourself comfortable.</p><div className="demo-tabs" aria-label="Demo tools"><button aria-pressed={demoTool === 'listen'} onClick={() => setDemoTool('listen')}><Headphones size={16} /> Listen</button><button aria-pressed={demoTool === 'text'} onClick={() => setDemoTool('text')}><Type size={16} /> Text size</button></div>{demoTool === 'listen' ? <><div className="waveform" aria-hidden="true">{[12,24,18,34,42,27,19,36,48,30,18,39,26,44,22,32,16,25,38,18].map((h,i) => <i key={i} style={{ height: h, opacity: playing ? 1 : .55 }} />)}</div><Button onClick={speak} className="demo-play">{playing ? <Square /> : <Play />}{playing ? 'Stop reading' : 'Read this aloud'}</Button><span className="sample-caption">Browser voice · English</span></> : <div className="text-controls"><span>Text size</span><div><Button variant="outline" size="icon" aria-label="Decrease text size" disabled={size <= 16} onClick={() => setSize(size - 2)}><Minus /></Button><strong aria-live="polite">{size}px</strong><Button variant="outline" size="icon" aria-label="Increase text size" disabled={size >= 26} onClick={() => setSize(size + 2)}><Plus /></Button></div><p>Changes apply to the sample article.</p></div>}<p className="demo-note" role="status">{message || 'An interactive preview of a more accessible web.'}</p></aside></div><div className="demo-bottom"><Volume2 size={14} /> A small change. A world of difference.<span>Made for real life.</span></div></div>;
}
