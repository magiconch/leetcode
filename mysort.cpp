//
// Created by Logic on 2021/12/6.
//

#include <stdlib.h>
#include <iostream>
#include <algorithm>
#include <vector>
#include <string>


#include "mysort.h"

using namespace std;

// 直接插入排序
void InsertSort(int A[], int n) {
    int j, temp;
    for (int i = 1; i < n; ++i) {
        if (A[i] < A[i - 1]) {
            temp = A[i];
            for (j = i - 1; j >= 0 && A[j] > temp; --j) { // 检查所有前面已经排序好的元素
                A[j + 1] = A[j]; // 所有大于temp的元素都往后挪位置
            }
            A[j + 1] = temp; // 复制到插入位置
        }
    }
}

// 希尔排序
/**
 * 一般的，我们把A[0]元素空置，其目的是为了方便遍历
 * 这时需要注意的是 数组长度 = 元素个数 所以循环时候要带上“=”号
 * */
void shellSort(int A[], int n) {
    int i, j;
    for (int step = n / 2; step >= 1; step = step / 2) { // 每次排序的步长
        for (i = step + 1;  i <= n; ++i) {
            if (A[i] < A[i - step]) { // 将A[i]插入有序增量子表
                A[0] = A[i];
                for (j = i - step; j > 0 && A[0] < A[j]; j-=step) { // 从后往前遍历，将A[i]所需要插入的位置空出来
                    A[j + step] = A[j];
                }
                A[j + step] = A[0];
            }
        }
    }
    // TODO: 这里需要将A[0]进行初始化 A[0] = null;
}

// 冒泡排序
void BubbleSort(int A[], int n) {
    for (int i = 0; i < n - 1; ++i) {
        bool flag = false;
        for (int j = n - 1; j > i; j--) { // 从后往前进行一次冒泡排序，把最小的值放在首位
            if (A[j - 1] > A[j]) {
                swap(A[j - 1], A[j]);
                flag = true;
            }
        }
        if (flag == false) {
            return; // 本次遍历没有发生交换， 证明已经有序
        }
    }
}

// 快速排序
int Partition(int A[], int low, int high) {
    int pivot = A[low];
    while (low < high) {
        while (low < high && A[high] >= pivot) {
            --high;
        }
        A[low] = A[high];
        while (low < high && A[low] <= pivot) {
            A[high] = A[low];
        }
        A[high] = A[low];
        return low;
    }
}

void QuickSort(int A[], int low, int high) {
    if (low < high) {
        int pivotpos = Partition(A, low, high);
        QuickSort(A, low, pivotpos - 1);
        QuickSort(A, pivotpos + 1, high);
    }
}



void testSort() {
    int A[10] = {50, 9, 28, 99, 96, 29, 19, 88, 76, 56};
//    int shellB[10] = {0, 9, 28, 99, 96, 29, 19, 88, 76, 56};
//    shellSort(shellB, 9);
//    for (auto ele : shellB) {
//        cout << ele << endl;
//    }
    for (auto ele : A) {
        cout << ele << endl;
    }


}
