from flask import Flask,render_template
app=Flask(_name_,template_folder='template')
@app.route('/')
def home():
    return render_template("index.html");
if _name=='main_':
    app.run(debug=True)