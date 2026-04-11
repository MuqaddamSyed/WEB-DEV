import tkinter as tk
from tkinter import messagebox
from tkinter import font

root = tk.Tk()
root.title("GUI Example")

label = tk.Label(root, text="Enter Task", font= ("Arial"))
label.pack()

entry_task = tk.Entry(root, width=30)
entry_task.pack(pady=10)


root.mainloop()