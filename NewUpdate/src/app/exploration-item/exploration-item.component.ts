import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource } from '@angular/material/tree';
import { MatTreeFlattener } from '@angular/material/tree';
import { Category } from '../interfaces/Category';
import { NAVIGATION_DATA } from '../navigation-data/navigation-data';
/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */

const TREE_DATA: Category[] = NAVIGATION_DATA;

/** Flat node with expandable and level information */
interface FlatNode {
  expandable: boolean;
  name: string;
  route: string;
  level: number;
}
@Component({
  selector: 'app-exploration-item',
  templateUrl: './exploration-item.component.html',
  styleUrls: ['./exploration-item.component.css'],
})
export class ExplorationItemComponent {
  private _transformer = (node: Category, level: number) => {
    return {
      expandable: !!node.subcategories && node.subcategories.length > 0,
      name: node.name,
      route: node.route,
      level: level,
    };
  };
  treeControl = new FlatTreeControl<FlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );
  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.subcategories
  );
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  constructor() {
    this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: FlatNode) => node.expandable;
}
