# SORTING ALGORITHMS

Sorting          Main Idea                              What Makes It Different
------------------------------------------------------------------------------------------
Selection Sort   Find smallest and place it             Selects correct element each time
Bubble Sort      Compare neighbors and swap             Biggest elements bubble to end
Insertion Sort   Insert element in correct position     Builds sorted part step by step
Merge Sort       Divide → sort → merge                  Divide & conquer
Quick Sort       Pick pivot → partition → sort          Sorts around a pivot

------------------------------------------------------------------------------------------
#   merge sort algo

0. if(low >= high) return

1. mid = Math.floor((low+high)/2)
2. divide(arr,low,mid)
3. divide(arr,lmid+1,high)

4. compare i & j pointers
5. push smaller tp temp arr & ++ that pointer 
6. if 1 pointer empty then place all other pointer 

7. copy temp to arr by loop with low+k