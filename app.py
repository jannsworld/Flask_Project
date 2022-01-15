
from flask import Flask, render_template, redirect, request, url_for
app = Flask(__name__)

@app.route('/', methods=['GET','POST'])
def index():
    return render_template('index.html')

@app.route('/test', methods=['GET','POST'])
def test():
    if request.method == 'GET':
        return render_template('test.html')
    else:
      return render_template('result.html')

@app.route('/result', methods=['GET'])
def result():
    if request.method == 'GET':
        return render_template('result.html')
    else:
       return render_template('index.html')

if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)

   #머신서버 구현 중