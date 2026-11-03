import json,subprocess
_T=None
def get(path,out=None):
    global _T
    if _T is None: _T=subprocess.check_output(['security','find-generic-password','-s','figma-page-token','-w'],text=True).strip()
    raw=subprocess.check_output(['curl','-sf','--max-time','600','-K','-','https://api.figma.com/v1/files/rRVs5HX0kIHffbS0V40djG'+path],input=f'header = "X-Figma-Token: {_T}"\n',text=True)
    if out: open(out,'w').write(raw)
    return json.loads(raw)
